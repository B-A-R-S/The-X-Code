# Importing necessary libraries
import numpy as np
import pandas as pd 
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn import metrics
from sklearn.metrics import r2_score

workout = pd.read_csv("Workout Dataset New.csv")
workout.head()

# Checking for null values
print(workout.info())

# Checking for outliers
print(workout.describe())

print(workout)

# Setting up the dependent and independent variables
X = pd.DataFrame(workout.iloc[:,:-1])
Y = pd.DataFrame(workout.iloc[:,-1])

# Have a glance at the independent variables
print(X)
# Have a glance at the dependent variable
print(Y)

# Divide the data into train and test sets
X_train, X_test, y_train, y_test = train_test_split(X, Y, test_size=0.3, random_state=42)

# Have a glance at the shape of the train and test sets
print(X_train.shape)
print(X_test.shape)
print(y_train.shape)
print(y_test.shape)

#Re-scaling the features
#from sklearn.preprocessing import MinMaxScaler
#scaler = MinMaxScaler()

#Applying scaler() to all the columns except Gender and Exercise type 
#num_vars1 = ['Gender','Age', 'Height', 'Weight in Kg', 'No.of calories burnt per 30 minutes']
#X_train[num_vars1] = scaler.fit_transform(X_train[num_vars1])
#num_vars2 = ['Exercise type']
#y_train[num_vars2] = scaler.fit_transform(y_train[num_vars2])

#print(X_train)
#print(y_train)

# Train the algorithm
regressor = LinearRegression()
regressor.fit(X_train, y_train)

LinearRegression(copy_X=True, fit_intercept=True, n_jobs=None)

# Having a look at the coefficients that the model has chosen
v = pd.DataFrame(regressor.coef_,index=['Co-efficient']).transpose()
w = pd.DataFrame(X.columns, columns=['Attribute'])

# Concatenating the DataFrames to compare
coeff_df = pd.concat([w,v], axis=1, join='inner')
print(coeff_df)

# Comparing the predicted value to the actual value
y_pred = regressor.predict(X_test)
y_pred = pd.DataFrame(y_pred, columns=['Predicted'])
print(y_pred)

print(y_test)

# Evaluate the algorithm
print('Mean Absolute Error:', metrics.mean_absolute_error(y_test, y_pred))
print('Mean Squarred Error:', metrics.mean_squared_error(y_test, y_pred))
print('Root Mean Squarred Error:', np.sqrt(metrics.mean_squared_error(y_test, y_pred)))
score = r2_score(y_test, y_pred)
print('r2 score:', score)

# Get user input for the independent variables
age = int(input("Enter your age: "))
gender = int(input("Enter your gender (1 for female, 2 for male): "))
height = float(input("Enter your height in cm"))
weight = float(input("Enter your weight in kg"))
calories = int(input("Enter the number of calories you need to burn per 30 minutes: "))

# Make predictions on the user input
user_input = np.array([gender, age, height, weight, calories]).reshape(1, -1)
user_input_df = pd.DataFrame(user_input, columns=X_train.columns)
predicted_exercise = regressor.predict(user_input_df)

# Print the predicted exercise
print("Recommended exercise type:", predicted_exercise[0])




