const userModel = require('../models/userModel');
const projectModel = require('../models/projectModel');
const profileController = {};

profileController.getuser = async (req, res, next) => {
  try {
    const userid = req.headers.authorization.replace('Bearer ', '');
    if (!userid) {
      const noneUserid = {
        log: 'Express error handler caught profileController.getuser error - userid',
        status: 501,
        message: {
          err: 'Userid in local storage is none.',
        },
      };
      return next(noneUserid);
    }

    const currentUser = await userModel.User.findById({ _id: userid });
    if (!currentUser) {
      const missedUser = {
        log: 'Express error handler caught profileController.getuser error - missedUser',
        status: 501,
        message: {
          err: 'Cannot get user from db.',
        },
      };
      return next(missedUser);
    }
    res.locals.user = currentUser;
    return next();
  } catch (err) {
    const cannotGetCurrentUser = {
      log: 'Express error handler caught profileController.getuser error - cannotGetCurrentUser',
      status: 501,
      message: {
        err: 'Cannot get user from the database for some reason',
      },
    };
    return next(cannotGetCurrentUser);
  }
};

profileController.newProject = async (req, res, next) => {
  try {
    const {
      ID,
      Name,
      Address,
      City,
      Client,
      ProjectType,
      StartDate,
      EndDate,
      Status,
      ContractAmount,
      Reimbersement,
      PaidAmount,
    } = req.body;
    if (
      !ID ||
      !Name ||
      !Address ||
      !City ||
      !Client ||
      !ProjectType ||
      !StartDate ||
      !Status ||
      !ContractAmount ||
      !Reimbersement ||
      !PaidAmount
    ) {
      return next(
        'Error in profileController.newProject: Missing required fields'
      );
    }

    const newProject = await projectModel.Project.create(req.body);
    res.locals.project = newProject;
    return next();
  } catch (err) {
    const createProjectDBError = {
      log: 'Express error handler caught profileController.newProject error',
      status: 500,
      message: {
        err: 'New project cannot be created in the database for some reason',
      },
    };
    return next(createProjectDBError);
  }
};

module.exports = profileController;
