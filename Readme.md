Note: Still looking for something simpler, keen to know what.

Solution 1. 
Runs the method once before the async ones are run

Solution 2.
Returns a promise that resolves only once the data has been returned. This way it won't set the data if it's already been set.

I'm aware both methods use a global variable