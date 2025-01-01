```
USER
name            			- string
email           			- string
password        			- string
language        			- enum:id,en
whatsapp        			- string
institute       			- string
created_at      			- Datetime

TEAM
name            			- string
password        			- string
institute       			- string
created_at      			- Datetime

CHALLENGE
name            			- string
type            			- enum:standard,code,dynamic,manual_verification,multiple_choice
category        			- string
detail          			- text
language        			- enum:bash,c#,c++,golang,java,python,ruby,rust
initial_value   			- string
decay_function  			- enum:linear,logarithmic
decay_value     			- string
minimum_value   			- string
value           			- string
publish_now                 - boolean
publish_date    			- Date
publish_time    			- Time
created_at      			- Datetime

ADMIN
name            			- string
email           			- string
password        			- string

SUBMISSIONS
user_name       			- string
team_name       			- string
challenge_name  			- string
type            			- enum:correct,incorrect
assessor_admin_name 	    - string
value           			- string
created_at      			- Datetime

SUBMISSION_COMMENT
admin_name      			- string
message         			- text
created_at      			- Datetime

NOTIFICATION
title           			- string
content         			- text
type            			- enum:toast,alert,background
play_sound      			- boolean
publish_now                 - boolean
publish_date    			- Date
publish_time    			- Time
```
