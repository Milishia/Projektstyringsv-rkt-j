package exceptions;

import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;

public class NotAuthorizedException extends Throwable {
    public NotAuthorizedException(String s)
    {
        super(s);
    }
}
