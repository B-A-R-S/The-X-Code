# Importing necessary libraries
import numpy as np
import pandas as pd 
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn import metrics
from sklearn.metrics import r2_score

insulin = pd.read_csv("Insulin1.csv")
insulin.head()

# Checking for null values
print(insulin.info())

# Checking for outliers
print(insulin.describe())

print(insulin)

# Setting up the dependent and independent variables
X = pd.DataFrame(insulin.iloc[:,:-1])
Y = pd.DataFrame(insulin.iloc[:,-1])

# Have a glance at the independent variables
print(X)
# Have a glance at the dependent variable
print(Y)

# Divide the data into train and test sets
X_train, X_test, y_train, y_test = train_test_split(X, Y, test_size=0.2, random_state=42)

# Have a glance at the shape of the train and test sets
print(X_train.shape)
print(X_test.shape)
print(y_train.shape)
print(y_test.shape)


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
weight = float(input("Enter your weight in kg"))
currentBg = float(input("Enter your current blood glucose level"))
targetBg = float(input("Enter your target blood glucose level"))
cho = float(input("Enter your total CHO in the meal"))

# Make predictions on the user input
user_input = np.array([weight, currentBg, targetBg, cho]).reshape(1, -1)
user_input_df = pd.DataFrame(user_input, columns=X_train.columns)
predicted_bolus = regressor.predict(user_input_df)
tdi = 0.55*weight
basal = tdi*0.5

# Print the predicted bolus dosage
print("Recommended Total Daily Insulin dosage : ", tdi)
print("Recommended basal dosage : ", basal)
print("Recommended bolus dosage : ", predicted_bolus)



