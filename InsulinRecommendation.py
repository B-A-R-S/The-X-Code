
# Evaluate the algorithm
print('Mean Absolute Error:', metrics.mean_absolute_error(y_test, y_pred))
print('Mean Squarred Error:', metrics.mean_squared_error(y_test, y_pred))
print('Root Mean Squarred Error:', np.sqrt(metrics.mean_squared_error(y_test, y_pred)))
score = r2_score(y_test, y_pred)
print('r2 score:', score)