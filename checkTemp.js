function checkTemp(a) {  
    if (a >= 0 && a<21) {
    return -1;
  } else if (a >= 21 && a <= 40) {
    return 0;
  } else if (a>40 && a<=60 ) {
    return 1;
  };
}
