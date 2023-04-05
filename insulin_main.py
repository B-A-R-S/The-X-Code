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
                      ,"model/my_model.h5"
                      ,"/tmp/my_model.h5")
        model = load_model("/tmp/my_model.h5")
        model.compile(loss=tf.keras.losses.mean_squared_error, optimizer='adam')

    input = request.json.get("int_array") 
    if input is None:
        return {"error":"No input found in request"}  
    try :
        input_array = np.array(input).reshape(1,-1)
    except:
        return{"error":"Unable to process input"}
    
    predicted_insulin_dosage = model.predict(input_array)

    return{"response":predicted_insulin_dosage}
