const functions = require('firebase-functions');
const admin = require('firebase-admin');
const moment = require('moment');

admin.initializeApp();

exports.addRanking = functions.database
    .ref('/ranking/temp/{pushId}')
    .onCreate(async (snapshot, context) => {
        const yearMonth = moment().format('YYYYMM');
        const { uid, name, avatar, secs, moves, level, time } = snapshot.val();

        const data = await admin.database().ref(`/ranking/${yearMonth}/${level}/${uid}`).once('value');
        if (data !== null) {
            const record = data.val();

            if (
                moment(time).isAfter(record.time) &&
                (
                    secs < record.secs ||
                    (secs === record.secs && moves < record.moves)
                )
            ) {
                // update database
                let updates = {};
                updates[`/ranking/${yearMonth}/${level}/${uid}`] = {
                    name: name,
                    avatar: avatar,
                    secs: secs,
                    moves: moves,
                    time: time
                };

                await admin.database().ref().update(updates);
            }
        } else {
            await admin.database().ref(`/ranking/${yearMonth}/${level}/${uid}`).set({
                name: name,
                avatar: avatar,
                secs: secs,
                moves: moves,
                time: time
            });
        }

        // delete data
        await admin.database().ref(`/ranking/temp/${context.params.pushId}`).set(null);
    });

// exports.scheduledFunction = functions.pubsub.schedule('every 5 minutes').onRun((context) => {
//     console.log('This will be run every 5 minutes!');
//     return null;
// });
