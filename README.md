# backend_test_agile
This is a test for job on Agile Content

## Job name
Desenvolvedor Backend (C#/Node.js) - Agile Content

## How to use
- As root, do the following:
````
npm install
````
````
cd /dist
````
````
npm start
````

- The result will be something like this:
````
Server is listening on { address: '::', family: 'IPv6', port: 1234 }
Input the url from log file:
````
- After, put the url link from log file, and press ENTER, like this:
````
https://s3.amazonaws.com/uux-itaas-static/minha-cdn-logs/input-01.txt
````

- After run, some to-do information will be apper:
````
Download is starting...
Download finished
>>Starting conversion
>>Conversion finish
To see the new log's file, please access the following link:

localhost:1234/getAgoraFormat/fkcoy

##Closing process, please do CTRL + C
````

## How to see the new log file
Access the localhost:1234/getAgoraFormat/fkcoy to see the "Agora" format

## Notes
- I don't understanding about the change from INVALIDATE to REFRESH_HIT. So I just make replace one to another.
- I don't see the version code, then I put "version 1.0" literally
- Date: I take the current date and put on the Date's line.
