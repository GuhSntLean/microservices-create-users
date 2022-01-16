const express = require('express');


app.use(express.json());
app.use(routes);

app.listen(3333);