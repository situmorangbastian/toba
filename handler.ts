import * as drash from "https://deno.land/x/drash@v2.7.1/mod.ts";
import {
  StatusCodes,
  StatusPhrases,
} from "https://deno.land/x/httpstatuscodes@v1.0/mod.ts";

class HealthResource extends drash.Resource {
  public paths = ["/health"];

  public GET(_request: drash.Request, response: drash.Response): void {
    response.status = StatusCodes.OK;
    response.text(StatusPhrases.OK);
    return;
  }
}

class DataResource extends drash.Resource {
  public paths = ["/data"];

  public GET(_request: drash.Request, response: drash.Response): void {
    response.status = StatusCodes.OK;
    response.json([]);
    return;
  }
}

class ErrorHandler extends drash.ErrorHandler {
  public catch(
    error: Error,
    _request: Request,
    response: drash.Response
  ): void {
    // Handle all built-in Drash errors. This means any error that Drash
    // throws internally will be handled in this block. This also means any
    // resource that throws Drash.Errors.HttpError will be handled here.
    if (error instanceof drash.Errors.HttpError) {
      response.status = error.code;
      return response.json({
        message: error.message.toLowerCase(),
      });
    }

    // If the error is not of type Drash.Errors.HttpError, then default to a
    // HTTP 500 error response. This is useful if you cannot ensure that
    // third-party dependencies (e.g., some database dependency) will throw
    // an error object that can be converted to an HTTP response.
    response.status = StatusCodes.INTERNAL_SERVER_ERROR;
    return response.json({
      message: StatusPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}

export { HealthResource, DataResource, ErrorHandler };
