# Importing necessary libraries
import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn import metrics
from sklearn.metrics import r2_score, mean_squared_error, mean_absolute_error

# Load the diabetes dataset
diabetes_df = pd.read_csv("insuline dose.csv")

print("****Checking the structure and the distribution of the dataframe****")
# Checking for the structure
print(diabetes_df.info())

# Checking for distribution
print(diabetes_df.describe())

# prints the entire DataFrame
print(diabetes_df)

# Select the predictor variables and the response variable
X = diabetes_df[['Weight (Kg)', 'Insulin sensitivity Factor', 'Current BG level', 'Target BG level', 'Basal (40-50%) units', 'Insulin to carbohydrate Ratio', 'CHO insulin dose', 'High blood sugar correction dose', 'Total CHO in a meal', 'Total Daily insulin requirement']]
y = diabetes_df['Total meal insulin dose']

print("****Checking the independent variables****")
# Have a glance at the independent variables
print(X)
print("****Checking the dependent variable****")
# Have a glance at the dependent variable
print(y)


# Split the data into training and testing sets
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)

print("****Checking the dependent variable****")

# Have a glance at the shape of the train and test sets
print(X_train.shape)
print(X_test.shape)
print(y_train.shape)
print(y_test.shape)

# Fit a linear regression model to the training data
model = LinearRegression()
model.fit(X_train, y_train)

# Having a look at the coefficients that the model has chosen
v = pd.DataFrame(model.coef_,index=['Co-efficient']).transpose()
w = pd.DataFrame(X.columns, columns=['Attribute'])

# Concatenating the DataFrames to compare
coeff_df = pd.concat([w,v], axis=1, join='inner')
print(coeff_df)

# Print the intercept of the model
print("Intercept:", model.intercept_)
