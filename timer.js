const args = process.argv.slice(2);

for (let time of args) {
  if (time >= 0 && typeof Number(time) === 'number')
  setTimeout(() => {
    process.stdout.write('\x07');
    
  }, Number(time) * 1000)
}

