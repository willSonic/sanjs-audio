

/**
 * AudiobeatfileController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */


module.exports = {
    check: function(req, res) { //called on every app start or when browser is refreshed
            Audiobeatfile.find('rap', function foundAudiobeatfile(err, beats){
                if(err){
                    Audiobeatfile.create({
                        audiobeatfile_id:"1",
                        audiobeatfile_genre:'rap',
                        audiobeatfile_name:'2short.mp3',
                        audiobeatfile_path:'public/audio/clips/rap/2short.mp3',
                        audiobeatfile_type:'audio',
                        audiobeatfile_size:'167kb',
                        audiobeatfile_format:'mp3',
                        audiobeatfile_cdn_url:'public/audio/clips/rap/2short.mp3',
                        title:'2short',
                        description:'old skool rap beat'
                    });
                    res.send(401);
                }else{
                    res.send(401);
                }
            });
    },

    //used for grabbing all records and individual records if a parameter is provided to food/:foodId
    index: function (req, res, next) {

        Audiobeatfile.find(function foundAudiobeatfile (err, beats){
            if(err) return next(err);
            else{//send the array of foods as a json response
                res.json(beats);
            }
        });
    },

    show: function (req, res, next) {
        Audiobeatfile.findOne(req.param('id'), function foundAudiobeatfile(err, beat){
            if (err) {
                console.log(err);
            } else {
                res.json(beat);
            }
        });
    },

    update: function(req, res, next) {

        Audiobeatfile.update(req.param('id'), req.params.all(), function foodUpdated(err, beat) {
            if (err) res.send(500);
            else {
                console.log("update called")
                console.log("params:")
                console.log(req.params.all())
                res.send(200);
            }
        });
    },

    destroy: function(req, res, next) {
        Audiobeatfile.findOne(req.param('id'), function foundAudiobeatfile(err, beat) {
            if (err) res.send(500);
            else {
                beat.destroy(req.param('id'), function bestDestroyed(err){
                    if (err) {
                        res.send(500);
                    }
                    else{
                        res.send(200);
                    }
                });
            }
        });
    },

    create: function(req, res, next){
        Audiobeatfile.create(req.params.all(), function audiobeatfileCreated (err, beat){
            console.log("create called")
            if (err) res.send(500);
            else{
                res.send(beat);
            }
        });
    }



};
