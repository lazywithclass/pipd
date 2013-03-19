##pipd

A simple node module to pipe modules into each other.
To have an idea about how this will work look into `./example`, I've provided two example modules.

This still uses the old (pre v0.10.0) version of streams API, I will update it.

###Install

`npm install -g pipd`

###Usage

`pipd moduleA moduleB`

Will pipe moduleA emitted data into moduleB.

###...

Yes, this relies on `eval`. It was the simplest way to do it.