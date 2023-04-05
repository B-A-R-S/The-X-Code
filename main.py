import tensorflow as tf
import numpy as np
from google.cloud import storage
from keras.models import load_model
import json

bucket_name = "team_x_code"
model = None

def download_blob(bucket_name, source_blob_name, destination_file_name):
    storage_client = storage.Client()
    bucket = storage_client.get_bucket(bucket_name)
    blob = bucket.blob(source_blob_name)
    blob.download_to_filename(destination_file_name)

def predict(request):
    global model
    if model is None:
        download_blob(bucket_name
                      ,"model/tf_model.h5"
                      ,"/tmp/tf_model.h5")
        model = load_model("/tmp/tf_model.h5")
        model.compile(loss=tf.keras.losses.mean_squared_error, optimizer='adam')

    input = request.json.get("int_array") 
    if input is None:
        return {"error":"No input found in request"}  
    try :
        input_array = np.array(input).reshape(1,-1)
    except:
        return{"error":"Unable to process input"}
    
    predicted_exercise = model.predict(input_array)

    exercise_name = ""
    
    if (1 < predicted_exercise < 1.5):
        exercise_name = "Bicycling, General"
    elif (1.5 < predicted_exercise < 2.5):
        exercise_name = "walking, for pleasure"
    elif (2.5 < predicted_exercise < 3.5):
        exercise_name = "jogging, general"
    elif (3.5 < predicted_exercise < 4.5):
        exercise_name = "running, 4 mph (15 min/mile)"
    elif (4.5 < predicted_exercise < 5.5):
        exercise_name = "swimming, general"  
    elif (5.5 < predicted_exercise < 6.5):
        exercise_name = "rope skipping, general"  
    elif (6.5 < predicted_exercise < 7.5):
        exercise_name = "badminton, general"
    elif (7.5 < predicted_exercise < 8.5):
        exercise_name = "cricket"
    elif (8.5 < predicted_exercise < 9.5):
        exercise_name = "tennis"
    elif (9.5 < predicted_exercise < 10.5):
        exercise_name = "Home exercise, General"
    elif (10.5 < predicted_exercise < 11.5):
        exercise_name = "Stretching, mild"
    elif (11.5 < predicted_exercise < 12.5):
        exercise_name = "Slide board exercise, General"

    return{"response":exercise_name}
