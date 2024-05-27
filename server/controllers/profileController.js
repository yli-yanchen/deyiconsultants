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

profileController.checkClient = async (req, res, next) => {
  try {
    if (
      !req.body.proDetail.ClientFirstName ||
      !req.body.proDetail.ClientLastName
    ) {
      const missedClient = {
        log: 'Express error handler caught profileController.checkClient error - missedClient',
        status: 501,
        message: {
          err: 'Missed client information.',
        },
      };
      return next(missedClient);
    }

    const clientid = await userModel.User.findOne({
      firstName: req.body.proDetail.ClientFirstName,
      lastName: req.body.proDetail.ClientLastName,
    });
    console.log('>>> client information: ', clientid._id);
    res.locals.clientid = clientid._id;
    return next();
  } catch (err) {
    const missedClient = {
      log: 'Express error handler caught profileController.checkClient error - missedClient',
      status: 501,
      message: {
        err: 'Cannot get client from db.',
      },
    };
    return next(missedClient);
  }
};

profileController.newProject = async (req, res, next) => {
  try {
    const {
      ID,
      Name,
      Address,
      City,
      ClientFirstName,
      ClientLastName,
      ProjectType,
      StartDate,
      EndDate,
      Status,
      ContractAmount,
      Reimbersement,
      PaidAmount,
    } = req.body.proDetail;
    if (
      !ID ||
      !Name ||
      !Address ||
      !City ||
      !ContractAmount ||
      !Reimbersement ||
      !PaidAmount
    ) {
      const missedFieldErr = {
        log: 'Express error handler caught profileController.newProject error',
        status: 406,
        message: {
          err: 'Missed fileds in the project details',
        },
      };
      return next(missedFieldErr);
    }

    const BalanceAmount = ContractAmount + Reimbersement - PaidAmount;
    const CreatedBy = req.body.user.id;
    console.log('>>> createdby in the newproject api: ', CreatedBy);

    const projectData = {
      ID: ID,
      Name: Name,
      Address: Address,
      City: City,
      ClientFirstName: ClientFirstName,
      ClientLastName: ClientLastName,
      ProjectType: ProjectType,
      StartDate: StartDate,
      EndDate: EndDate,
      Status: Status,

      ContractAmount: ContractAmount,
      Reimbersement: Reimbersement,
      PaidAmount: PaidAmount,
      BalanceAmount: BalanceAmount,

      CreatedBy: CreatedBy,
      ClientID: res.locals.clientid,
    };

    console.log('>>> project ready to db: ', projectData);

    const newProject = await projectModel.Project.create(projectData);
    res.locals.project = newProject;
    return next();
  } catch (err) {
    const createProjectDBError = {
      log: 'Express error handler caught profileController.newProject in DB error',
      status: 502,
      message: {
        err: 'New project cannot be created in the database for some reason',
      },
    };
    return next(createProjectDBError);
  }
};

module.exports = profileController;
