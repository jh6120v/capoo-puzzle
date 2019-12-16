const functions = require('firebase-functions');
const admin = require('firebase-admin');
const moment = require('moment');
const { getGrids, LEVEL_MAP } = require('./commons/utils');

admin.initializeApp();

exports.addCompetition = functions.database
    .ref('/competition/{roomId}')
    .onCreate(async (snapshot, context) => {
        const roomId = context.params.roomId;
        const { level, users } = snapshot.val();
        const grids = getGrids(LEVEL_MAP[level]);

        await admin
            .database()
            .ref(`/competition/${roomId}/grids`)
            .set(grids);

        await Object.keys(users).forEach(async (key) => {
            await admin
                .database()
                .ref(`/competition/${roomId}/users/${key}/grids`)
                .set(grids);
        })
    });

// exports.updateUsersPercent = functions.database
//     .ref('/competition/{roomId}/users/{uid}/percent')
//     .onUpdate(async (change, context) => {
//         const roomId = context.params.roomId;
//         const uid = context.params.uid;
//         const afterData = change.after.val();
//
//         if (afterData >= 100) {
//             await admin
//                 .database()
//                 .ref(`/competition/${roomId}/winner`)
//                 .set(uid);
//         }
//     });

exports.updateUserReady = functions.database
    .ref('/competition/{roomId}/users/{uid}/ready')
    .onUpdate(async (change, context) => {
        const roomId = context.params.roomId;
        const competition = await admin
            .database()
            .ref(`/competition/${roomId}`)
            .once('value');

        let readyNums = 0;
        await Object.keys(competition.val().users).forEach(async (key) => {
            if (competition.val().users[key].ready) await readyNums++;
        });

        if (readyNums === competition.val().player && competition.val().allReady === false) {
            await admin
                .database()
                .ref(`/competition/${roomId}/allReady`)
                .set(true);
        }
    });

// exports.updateUsersCompetition = functions.database
//     .ref('/competition/{roomId}/users')
//     .onUpdate(async (change, context) => {
//         const roomId = context.params.roomId;
//         const beforeData = change.before.val();
//         const afterData = change.after.val();
//
//         if (beforeData.allReady === true) {
//             return;
//         }
//
//         let readyNums = 0;
//         await Object.keys(afterData).forEach(async (key) => {
//             if (afterData[key].ready) await readyNums++;
//
//             if (afterData[key].percent >= 100) {
//                 await admin
//                     .database()
//                     .ref(`/competition/${roomId}/winner`)
//                     .set(key);
//             }
//         });
//
//         const competition = await admin
//             .database()
//             .ref(`/competition/${roomId}`)
//             .once('value');
//
//         if (readyNums === competition.val().player && competition.val().allReady === false) {
//             await admin
//                 .database()
//                 .ref(`/competition/${roomId}/allReady`)
//                 .set(true);
//         }
//     });

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
