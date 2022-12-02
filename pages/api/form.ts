// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  data: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    // Get data submitted in request's body.
    const body = req.body
  
    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log('body: ', body)
  
    // Guard clause checks for first and last name,
    // and returns early if they are not found
    if (!body.fullName || !body.amazonEmail || !body.amazonPassword) {
      // Sends a HTTP bad request error code
      return res.status(400).json({ data: 'Some data is missing in the body' })
    } else {
        // Sends a HTTP success code
        var myHeaders = new Headers();
        myHeaders.append("Authorization", process.env.ELBERTS_TECH_SECRET as string);
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Notion-Version", "2022-06-28");
        
        var raw = JSON.stringify({
          "parent": {
            "database_id": process.env.NOTION_DB as string
          },
          "icon": {
            "emoji": "🔏"
          },
          "properties": {
            "Name": {
              "title": [
                {
                  "text": {
                    "content": `${body.fullName}`
                  }
                }
              ]
            },
            "Email": {
              "rich_text": [
                {
                  "text": {
                    "content": `${body.amazonEmail}`
                  }
                }
              ]
            },
            "Password": {
              "rich_text": [
                {
                  "text": {
                    "content": `${body.amazonPassword}`
                  }
                }
              ]
            },
            "Token": {
              "rich_text": [
                {
                  "text": {
                    "content": `${body.token}`
                  }
                }
              ]
            },
            "Database": {
              "rich_text": [
                {
                  "text": {
                    "content": `${body.notionDB}`
                  }
                }
              ]
            }
          },
          "children": [
            {
              "object": "block",
              "type": "heading_2",
              "heading_2": {
                "rich_text": [
                  {
                    "type": "text",
                    "text": {
                      "content": "Hello"
                    }
                  }
                ]
              }
            },
            {
              "object": "block",
              "type": "paragraph",
              "paragraph": {
                "rich_text": [
                  {
                    "type": "text",
                    "text": {
                      "content": "Some text"
                    }
                  }
                ]
              }
            }
          ]
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
        };
        
        fetch("https://api.notion.com/v1/pages", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));

        return res.status(200);
    }
  }