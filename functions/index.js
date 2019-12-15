const functions = require('firebase-functions');
const admin = require('firebase-admin');
const moment = require('moment');

admin.initializeApp();

exports.updateCompetition = functions.database
    .ref('/competition/{pushId}/users')
    .onUpdate(async (change, context) => {
        const beforeData = change.before.val();
        const afterData = change.after.val();
        console.log(context);
        console.log(beforeData);
        console.log(afterData);

        if (beforeData.allReady === true) {
            return ;
        }

        console.log('start check');
        let readyNums = 0;
        await Object.keys(afterData).forEach(async (key) => {
            if (afterData[key].ready) await readyNums++;
        });
        console.log('end check');

        const competition = await admin.database().ref(`/competition/${context.params.pushId}`).once('value');
        console.log(readyNums, competition.val().player);
        if (readyNums === competition.val().player) {
            console.log('before update');
            await admin
                .database()
                .ref(`/competition/${context.params.pushId}/allReady`)
                .set(true);
            console.log('after update');
        }
    });

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
