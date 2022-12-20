CREATE TABLE IF NOT EXISTS public.urls (
    id                 SERIAL             not NULL, 
    base_url            VARCHAR        not null,
    mini_url            VARCHAR        not null
    )WITHOUT OIDS;