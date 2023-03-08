const magic = require('../../utils/magic');
const enum_ = require('../../utils/enum');
const odmMovie = require('../odm/odm-movie');

exports.GetAll = async (req, res) => {
  let status = 'Success',
   errorcode = '',
   message = '',
   data = '',
   statuscode=0,
   response = {};

  try {
    let respOdm = await odmMovie.GetAll();
    if (respOdm.err) {
      status = 'Failure',
      errorcode = respOdm.err.code,
      message = respOdm.err.message,
      statuscode = enum_.CODE_BAD_REQUEST,
      data = '';
    } else {
      message = 'Success Response';
      data = respOdm;
      statuscode = data.length > 0 ? enum_.CODE_OK : enum_.CODE_NO_CONTENT;
    }
    response = await magic.ResponseService(status, errorcode, message, data);
    return res.status(statuscode).send(response);
  } catch (error) {
    console.log('err=', error);
    response = await magic.ResponseService('Failure', enum_.CODE_INTERNAL_SERVER_ERROR, error, '');
    return res.status(enum_.CODE_INTERNAL_SERVER_ERROR).send(response);
  }
};

exports.Create = async (req, res) => {
  let status = 'Success',
   errorcode = '',
   message = '',
   data = '',
   statuscode = 0,
   response = {};

  try {
    const Title = req.body.Title;
    const Director = req.body.Director;
    const Poster = req.body.Poster;

    if (Title &&  Director && Poster ) {
      let respOdm = await odmMovie.Create(Title, Director, Poster);
      if (respOdm.err) {
        status = 'Failure',
        errorcode = respOdm.err.code,
        message = respOdm.err.message,
        statuscode = enum_.CODE_BAD_REQUEST,
        data = '';
      } else {
        message = 'Movie created! 😉';
        statuscode = enum_.CODE_CREATED;
      }
    } else {
      status = 'Failure',
      errorcode = enum_.CODE_BAD_REQUEST,
      message = 'All fields are required',
      statuscode = enum_.CODE_BAD_REQUEST;
    }
    response = await magic.ResponseService(status, errorcode, message, data);
    return res.status(statuscode).send(response);
  } catch (error) {
    console.log('err=', error);
    return res.status(statuscode).send(response);
  }
};
