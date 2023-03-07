import ExpressAdapter from "./infra/api/express-adapter";
import UserRoutes from "./infra/api/routes/user-routes";
import {UserMemoryRepository} from "./infra/repository/user-memory.repository";

const httpServer = new ExpressAdapter();
const userRepository = new UserMemoryRepository();
const userRouter = new UserRoutes(httpServer, userRepository)

userRouter.init();
httpServer.listen(3000);
