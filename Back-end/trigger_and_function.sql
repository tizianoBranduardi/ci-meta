CREATE OR REPLACE FUNCTION ab_user_to_appuser_f()
RETURNS TRIGGER
AS
$$
BEGIN
  INSERT INTO appuser
              (id,
               username)
              VALUES (NEW.id,
                      NEW.user);

  RETURN NEW;
END;
$$
LANGUAGE plpgsql;

CREATE TRIGGER ab_user_to_appuser_t
       BEFORE INSERT
       ON ab_user
       FOR EACH ROW
       EXECUTE PROCEDURE ab_user_to_appuser_f();