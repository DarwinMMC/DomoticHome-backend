import app from './app';
import {PORT} from './config';

app.set('PORT', PORT);

app.listen(app.get('PORT'), (err) => {
  if (err) {
    console.log('ERROR RUN SERVE...');
    return 0;
  }
  console.log('SERVER RUNNING...');
});
