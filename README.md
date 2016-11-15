# TicketGenerate
create database ticketgenerate;
use ticketgenerate;
create table ticket(
ticketId int PRIMARY KEY,
fromjourney varchar(100),
tojourney varchar(100),
cost float);
