const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');
 

stdin.on('data', (key) => { 

  if (key === '\u0003') {
    process.stdout.write('Thanks for using me, ciao! \n');
    process.exit();  

  } else if (key === 'b') {
    process.stdout.write('\x07');

  } else if (parseInt(key) >= 1 && parseInt(key) <= 9)
  
  process.stdout.write(`setting timer for ${key} seconds.... \n`);
  
  setTimeout( () => {
    process.stdout.write('\x07')
  }, parseInt(key) * 1000)
  
});
 
