import csv
from datetime import datetime
import sys
import textwrap

def load_csv(filename):
    data = []
    with open(filename) as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            data.append(row)
    return data

def write_posts(data):
    for row in data:
        print(row['state'])
        today = datetime.today().strftime("%Y-%m-%d")
        title = row['permalink'].replace('/','-').replace(' ', '-')
        slug = f"{today}{title}"
        with open(f"_posts/{slug}.md", 'w') as outfile:
            header = textwrap.dedent(f"""
                ---
                layout: post
                lang: en
                permalink: {row['permalink']}
                shortlink: {row['shortlink']}
                title: "{row['title']}"
                share_header: "{row['share header']}"
                share_subhead: "{row['share subhead']}"
                share_text: "{row['share text']}"
                share_image: /assets/uploads/state-share-images{row['image location']}
                ---
            """).lstrip()
            outfile.write(header)
            outfile.write(row['body'])


if __name__ == "__main__":
    if len(sys.argv) == 1:
        print("FILENAME.csv")
        sys.exit(-1)

    fn = sys.argv[1]
    data = load_csv(fn)
    write_posts(data)
    print("done")
