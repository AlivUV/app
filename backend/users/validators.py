import re

def regex_validator(regex_pattern):
    def validate(value):
        if not re.match(regex_pattern, value):
            raise ValueError('Invalid value')
    return validate