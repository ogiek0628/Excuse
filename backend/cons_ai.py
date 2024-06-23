import imp
from openai import OpenAI
from dotenv import load_dotenv
import os

# .envファイルを現在のディレクトリからロード
load_dotenv()

# OpenAI APIキーを設定
client = OpenAI()

def make_message(option1, option2):
    
    completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content":"条件をもとに遅刻の理由ををランダムで一つ考え、それだけを出力します。"},
            {"role": "user", "content": f"条件：私は、{option1}で、{option2}分ほど遅刻をしてしまいそう。"}
        ]
    )

    message = completion.choices[0].message.content
    return message

    

if __name__ == "__main__":
    make_message()
