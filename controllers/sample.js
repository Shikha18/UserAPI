var Sample = require('../models/sample');

exports.test = function (req, res) {
	res.send('Greetings from the Test controller!');

};

exports.user_details_create = function (req, res, next) {
	var sample = new Sample(
	{
		user_name: req.body.user_name,
		email: req.body.email,
		password: req.body.password,
		contact: req.body.contact
	});

	sample.save(function(err, obj){
		if(err) {
			var api_res = {
				msg: 'There occurred some error',
				err: err
				
			}
			console.log('err');
				console.log(err);
			return res.status(500).send(api_res);
		}
		var api_res = {
			msg: 'Sample_details Created successfully',
			data: obj
		}
		res.status(201).send(api_res);

	})
};

exports.users_list = function(req, res) {
	Sample.find(req.query, function (err, user){

		console.log('req.query');
	    console.log(req.query);
	  
	    console.log('req.params');
	    console.log(req.params);
	  

		if(err) return next(err);
		if(user) {
			var api_res ={
				msg: 'Users are with this information',
				data: user
				
			}
			return res.status(500).send(api_res);

				var api_res= {
					msg: 'Users are not there with this information'
				
			}
		}
		res.send(api_res);

	})
};

exports.users_details = function(req, res) {
	Sample.findById(req.params.id, function (err, user){
		if(err) return next(err);
		if (user) {
			var api_res = {
				msg: 'All Good',
				data: user
			}
			var status = 200;
		} else {
			var api_res = {
				msg: 'User is Not Found with this ID'
			}
			var status = 404;
		}
		res.status(status).send(api_res);

	})
};


exports.user_details_update = function(req, res) {
	Sample.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, user) {
			if(err)
			{
				return next(err);
			} 
			else {
				var api_res = {
					msg: 'User_s Updated details',
					data: req.body	
				}  
			}
			res.status(200).send(api_res);
		})
};

 exports.user_details_delete = function (req, res) {
 	Sample.findByIdAndRemove(req.params.id, function (err, user)
 	{ 
 		if(err)
 		{
 		 return next(err)
 		 res.status(404);
 		}
 	    else {
 	    	var api_res = {
 	    		msg: 'User_details is Deleted and Deleted details is given below:',
 	    		data: user
 	    	}
 	    }
 		res.status(200).send(api_res);

 	})
 };

