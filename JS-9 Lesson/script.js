// Треба реалізувати свій розпорядок дня. 
// Колбеками, промісами та асинк авейт.

// В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання. 
// Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби 
// і т.д.

// Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають. 
// Якщо ж все ок, то ви маєте прожити свій звичайний день.
// Кожна подія має бути з рандомною (не по зростанню) затримкою.

function randomNumberOfSec () {
   return Math.floor(Math.random() * 4000);
}

function myDay (isWakeUp, cb) {
    setTimeout( () => {
        if (isWakeUp) {
            cb(null, 'I woke up');
        } else {
            cb('I am still sleep', null);  
        }
    }, randomNumberOfSec())
}

function haveMyBreakfast (isBreakfast, cb) {
    setTimeout ( () => {
        if (isBreakfast) {
            cb(null, 'Have my breakfast');
        } else {
            cb('Drink only tea', null);
        }
    }, randomNumberOfSec())
}

function clearMyTeeth (clearTeeth, cb) {
    setTimeout ( () => {
        if (clearTeeth) {
            cb(null, 'I clear my teeth');
        } else {
            cb('I have bad smell from my mouth', null)
        }
    }, randomNumberOfSec())
}

function getDress (dressing, cb) {
    setTimeout ( () => {
        if (dressing) {
            cb(null, 'I got dressed and I am ready to go to work');
        } else {
            cb('I am not ready to go to work', null);
        }
    }, randomNumberOfSec())
}

function goToWork (goWork, cb) {
    setTimeout ( () => {
        if (goWork) {
            cb(null, 'I go to work');
        } else {
            cb('I stay at home', null);
        }
    }, randomNumberOfSec())
}

function getReward (reward, cb) {
    setTimeout ( () => {
        if (reward) {
            cb(null, 'I have reward')
        } else {
            cb('Today is not my day', null)
        }
    }, randomNumberOfSec());
}

function goHome (goToHome, cb) {
    setTimeout ( () => {
        if (goToHome) {
            cb(null, 'Hooray. I go home');
        } else {
            cb('I stay at work for an hour more', null);
        }
    }, randomNumberOfSec());
}

function goSleep (sleep, cb) {
  setTimeout ( () => {
    if (sleep) {
      cb(null, 'Huh I go sleep');
    } else {
      cb('I can not to go to sleep. I must to do my Homework', null);
    }
  }, randomNumberOfSec());
}

myDay(true, (err, data) => {
    if (err) {
        console.log('I am still sleep');
    } else {
        console.log(data);
        haveMyBreakfast(data, (e, d) => {
            if (e) {
                console.log(e);   
            } else {
                console.log(d);
                clearMyTeeth(d, (error, data) => {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log(data);
                        getDress(data, (error, data) => {
                            if (error) {
                                console(error);
                            } else {
                                console.log(data);
                                goToWork(data, (error, data) => {
                                    if (error) {
                                        console.log(error);
                                    }  else {
                                        console.log(data);
                                        getReward(data, (error, data) => {
                                            if (error) {
                                                console.log(error);
                                            } else {
                                                console.log(data);
                                                goHome(data, (error, data) => {
                                                    if (error) {
                                                      console.log(error);
                                                    } else {
                                                      console.log(data);
                                                      goSleep(data, (error, data) => {
                                                        if (error) {
                                                          console.log(error);
                                                        } else {
                                                          console.log(data);
                                                        }
                                                      })
                                                    }
                                                })
                                            }
                                        })
                                    }
                                })
                            }
                        }) 
                    }
                })
            }
        });
    }
})

// промісами

function myDayTwo (isWakeUp) {
    return new Promise ((resolve, reject) => {
        setTimeout( () => {
            if (isWakeUp) {
                resolve('I woke up');
            } else {
                reject('I am still sleep');  
            }
        }, randomNumberOfSec());
    })
}

function haveMyBreakfastTwo (isBreakfast) {
    return new Promise ((resolve, reject) => {
        setTimeout ( () => {
            if (isBreakfast) {
                resolve('Have my breakfast');
            } else {
                reject('Drink only tea');
            }
        }, randomNumberOfSec());
    })
}

function clearMyTeethTwo (clearTeeth) {
    return new Promise ((resolve, reject) => {
        setTimeout ( () => {
            if (clearTeeth) {
                resolve('I clear my teeth');
            } else {
                reject('I have bad smell from my mouth');
            }
        }, randomNumberOfSec());
    });
}

function getDressTwo (dressing) {
    return new Promise ((resolve, reject) => {
        setTimeout ( () => {
            if (dressing) {
                resolve('I got dressed and I am ready to go to work');
            } else {
                reject('I am not ready to go to work');
            }
        }, randomNumberOfSec());
    });
}

function goToWorkTwo (goWork) {
    return new Promise ((resolve, reject) => {
        setTimeout ( () => {
            if (goWork) {
                resolve('I go to work');
            } else {
                reject('I stay at home');
            }
        }, randomNumberOfSec())
    })
    
}

function getRewardTwo (reward) {
    return new Promise ((resolve, reject) => {
        setTimeout ( () => {
            if (reward) {
                resolve('I have reward');
            } else {
                reject('Today is not my day');
            }
        }, randomNumberOfSec());
    })
    
}

function goHomeTwo (goToHome) {
    return new Promise ((resolve, reject) => {
        setTimeout ( () => {
            if (goToHome) {
                resolve('Hooray. I go home');
            } else {
                reject('I stay at work for an hour more');
            }
        }, randomNumberOfSec());
    });
}

function goSleepTwo (sleep) {
    return new Promise ((resolve, reject) => {
        setTimeout ( () => {
            if (sleep) {
              resolve('Huh I go sleep');
            } else {
              reject('I can not to go to sleep. I must to do my Homework');
            }
          }, randomNumberOfSec());
    })
}

myDayTwo(true)
.then(value => {
    console.log(value);
    return haveMyBreakfastTwo(value);
})
.then(value => {
        console.log(value);
        return clearMyTeethTwo(value);
})
.then(value => {
    console.log(value);
    return getDressTwo(value);
})
.then(value => {
    console.log(value);
    return goToWorkTwo(value);
})
.then(value => {
    console.log(value);
    return getRewardTwo(value);
})
.then(value => {
    console.log(value);
    return goHomeTwo(value);
})
.then(value => {
    console.log(value);
    return goSleepTwo(value);
})
.then(value => {
    console.log(value);
})
.catch(error => {
    console.error(error)
});

// асинк авейт. буду коритсуватися функціями з таски 2, бо для асинк авейту вони мають бути промісифіковані

async function myDayThree () {
    try {
        let wakingUp = await myDayTwo(true);
        console.log(wakingUp);

        let myBreakfast = await haveMyBreakfastTwo(wakingUp);
        console.log(myBreakfast);

        let clearTeeth = await clearMyTeethTwo(myBreakfast);
        console.log(clearTeeth);

        let getDressing = await getDressTwo(clearTeeth);
        console.log(getDressing);

        let goToMyWork = await goToWorkTwo(getDressing);
        console.log(goToMyWork);

        let getMyReward = await getRewardTwo(goToMyWork);
        console.log(getMyReward);

        let goToMyHome = await goHomeTwo(getMyReward);
        console.log(goToMyHome);

        let goToBed = await goSleepTwo(goToMyHome);
        console.log(goToBed);
    } catch(err) {
        console.error(err);
    }
}

myDayThree();