"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const exception_filter_1 = require("../utils/exception.filter");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalFilters(new exception_filter_1.HttpExceptionFilter());
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map