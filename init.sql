CREATE TABLE public.properties (
    id SERIAL PRIMARY KEY,
    sale_type varchar(255),
    property_type varchar(255),
    property_address varchar(255),
    city varchar(255),
    state_or_province varchar(255),
    zip_or_postal_code varchar(255),
    price int,
    beds int,
    baths float,
    property_location varchar(255),
    square_feet int,
    lot_size int,
    year_built int,
    days_on_market int,
    hoa_month int,
    property_status varchar(255),
    source_url varchar(255),
    sourcee varchar(255),
    mls_no varchar(255),
    latitude float,
    longitude float
);

COPY public.properties(sale_type,property_type,property_address,city,state_or_province,zip_or_postal_code,price,beds,baths,property_location,square_feet,lot_size,year_built,days_on_market,hoa_month,property_status,source_url,sourcee,mls_no,latitude,longitude)
FROM '/data/sffinal.csv'
DELIMITER ','
CSV HEADER;

