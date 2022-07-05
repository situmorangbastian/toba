import * as Drash from "https://deno.land/x/drash@v2.7.0/mod.ts";

class HealthResource extends Drash.Resource {
  public paths = ["/health"];

  public GET(_request: Drash.Request, response: Drash.Response): void {
    response.status = 200;
    response.text("ok");
    return;
  }
}

class DataResource extends Drash.Resource {
  public paths = ["/data"];

  public GET(_request: Drash.Request, response: Drash.Response): void {
    response.status = 200;
    response.json([]);
    return;
  }
}

class ErrorHandler extends Drash.ErrorHandler {
  public catch(
    error: Error,
    _request: Request,
    response: Drash.Response
  ): void {
    // Handle all built-in Drash errors. This means any error that Drash
    // throws internally will be handled in this block. This also means any
    // resource that throws Drash.Errors.HttpError will be handled here.
    if (error instanceof Drash.Errors.HttpError) {
      response.status = error.code;
      return response.json({
        message: error.message.toLowerCase(),
      });
    }

    // If the error is not of type Drash.Errors.HttpError, then default to a
    // HTTP 500 error response. This is useful if you cannot ensure that
    // third-party dependencies (e.g., some database dependency) will throw
    // an error object that can be converted to an HTTP response.
    response.status = 500;
    return response.json({
      message: "Server failed to process the request.",
    });
  }
}

export { HealthResource, DataResource, ErrorHandler };
