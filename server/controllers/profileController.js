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
    const { proDetail } = req.body;
    console.log('>>> from req.body: ', proDetail);
    const { ClientFirstName, ClientLastName } = proDetail;
    console.log('>>> client first name: ', ClientFirstName);
    console.log('>>> client last name: ', ClientLastName);

    if (!ClientFirstName || !ClientLastName) {
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
      firstName: ClientFirstName,
      lastName: ClientLastName,
    });
    // console.log('>>> find client in the database: ', clientid);

    if (!clientid) {
      const needNewClient = {
        log: 'No existing client in the database',
        status: 204,
        message: {
          err: 'Not exist, create new client.',
        },
      };
      return next(needNewClient);
    }

    res.locals.clientid = clientid._id;
    // console.log('>>> clientid: ', clientid._id);
    return next();
  } catch (err) {
    const missedClient = {
      log: 'Express error handler caught profileController.checkClient error - unknown reason',
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
      IncomingAmount,
      Engineer,
    } = req.body.proDetail;
    console.log('>>> req.body.proDetail in newProject: ', req.body.proDetail);

    const contractAmount = Number(ContractAmount) || 0;
    const reimbersement = Number(Reimbersement) || 0;
    const incomingAmount = Number(IncomingAmount) || 0;
    const outcomingAmount = Number(Engineer.OutcomingAmount) || 0;
    const BalanceAmount =
      contractAmount + reimbersement - incomingAmount - outcomingAmount;
    console.log('>>> BalanceAmount: ', BalanceAmount);

    const CreatedBy = req.body.user.id;
    console.log('>>> createdby in the newproject api: ', CreatedBy);

    if (
      !ID ||
      !Name ||
      !Address ||
      !City ||
      !contractAmount ||
      !reimbersement ||
      !incomingAmount
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

      ContractAmount: contractAmount,
      Reimbersement: reimbersement,
      IncomingAmount: incomingAmount,
      BalanceAmount: BalanceAmount,

      Engineer: [
        {
          Name: Engineer.Name || 'Jeff',
          OutcomingAmount: Engineer.OutcomingAmount || 0,
          Deadline: Engineer.Deadline || StartDate,
        },
      ],
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

profileController.getproject = async (req, res, next) => {
  const userid = res.locals.user.ID;
  return next();
};

module.exports = profileController;
