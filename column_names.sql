
select t.table_name, table_type,column_name,data_type,ordinal_position 
from information_schema.tables as t,
information_schema.columns as c
where c.table_schema ='public'
and t.table_schema ='public'
and t.table_catalog='speakout'
and t.table_name = c.table_name
order by table_type,table_name,ordinal_position


