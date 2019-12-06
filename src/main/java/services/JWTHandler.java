package services;

import com.fasterxml.jackson.databind.ObjectMapper;
import data.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.impl.crypto.MacProvider;

import javax.crypto.spec.SecretKeySpec;
import javax.ws.rs.NotAuthorizedException;
import java.security.Key;
import java.util.Calendar;

public class JWTHandler
{
    private static Key key;
    private static final int TOKEN_EXPIRATION = 2880; //Antal minutters levetid = 2 dage.


    public static String generateJWT(User user)
    {
        Calendar expiry = Calendar.getInstance();
        expiry.add(Calendar.MINUTE , TOKEN_EXPIRATION);
        return Jwts.builder()
                .setIssuer("DragonPlanner")
                .claim("user" , user)
                .signWith(SignatureAlgorithm.HS512, getKey())
                .setExpiration(expiry.getTime())
                .compact();
    }

    private static Key getKey()
    {
        if(key == null)
        {
            if (System.getenv("JWT_SECRET_KEY") != null && !System.getenv("JWT_SECRET_KEY").equals(""))
            {
                String string = System.getenv("JWT_SECRET_KEY");
                key = new SecretKeySpec(string.getBytes(), 0, string.length(), "HS512");
            }
            else
            {
                key = MacProvider.generateKey(SignatureAlgorithm.HS512);
            }
        }
        return key;
    }

    public static User validate(String authentication)
    {
        String[] tokenArray = authentication.split(" ");
        String token = tokenArray[tokenArray.length - 1];
        try {
            Claims claims = Jwts.parser()
                    .setSigningKey(getKey())
                    .parseClaimsJws(token)
                    .getBody();
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.convertValue(claims.get("user"), User.class);
        }
        catch (JwtException JwtException)
        {
            System.out.println(JwtException.getClass() + ":  " + JwtException.getMessage());
            throw new NotAuthorizedException(JwtException.getMessage());
        }
    }
}
