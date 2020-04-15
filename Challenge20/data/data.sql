CREATE TABLE IF NOT EXISTS data (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    string VARCHAR(100) NOT NULL,
    integer VARHCAR(4) NOT NULL,
    float VARCHAR(4) NOT NULL,
    date VARCHAR(10) NOT NULL,
    boolean VARCHAR(5) NOT NULL
);

INSERT INTO data (string, integer, float, date, boolean) VALUES
('Testing data', '6', '4.89', '22-04-2019', 'true');

INSERT INTO data (string, integer, float, date, boolean) VALUES
('Check data', '2', '6.43', '23-05-1998', 'false');