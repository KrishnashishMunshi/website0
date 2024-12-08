from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    # Data to pass to the template
    data = {
        "title": "Krishna's Website",
        "meta_title": "Krishna's Website",
        "meta_description": "Krishnashish Munshi's Portfolio Website"
    }
    return render_template('index.html', data=data)

@app.route('/projects')
def portfolio():
    # Data for the projects page
    data = {
        "title": "Krishna's Portfolio",
        "meta_title": "Projects",
        "meta_description": "My Projects"
    }
    portfolio_items = [
        {"title": "website0", "description": "This portfolio website itself!", "link": "https://github.com/KrishnashishMunshi/website0"}
    ]
    return render_template('projects.html', data=data, portfolio_items=portfolio_items)
if __name__ == '__main__':
    app.run(debug=True)