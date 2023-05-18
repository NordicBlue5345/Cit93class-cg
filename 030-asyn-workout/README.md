- So for this instance i would imagine the callback to look something like this
thing1(() => {                // Callback for thing1
    things2(() => {           // Callback for thing2
        thing3();             // Callback for thing3
    });
});

- but to be honest this time Im not 100% sure, but that would be a guess for me.