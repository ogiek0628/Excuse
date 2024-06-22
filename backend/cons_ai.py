import os
from openai import OpenAI

client = OpenAI(
    api_key="ここに作成したキーを入力する",
)

chat_completion = client.chat.completions.create(
    messages=[
        {
            "role": "user",
            "content": "こんにちは",
        }
    ],
    model="gpt-3.5-turbo",
)
