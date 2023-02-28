import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component { 

    // articles = [{
    //     "source": {
    //         "id": "lequipe",
    //         "name": "L'equipe"
    //     },
    //     "author": "L'EQUIPE",
    //     "title": "Laurie Delhostal joker de Marina Lorenzo dans « Dimanche Soir Football »",
    //     "description": "Enceinte, Marina Lorenzo, la présentatrice de <i>Dimanche Soir Football</i> sur Amazon Prime Video, sera remplacée à partir de janvier 2022 par Laurie Delhostal. L'intérim durera jusqu'à la fin de la saison.",
    //     "url": "https://www.lequipe.fr/Medias/Actualites/Laurie-delhostal-joker-de-marina-lorenzo-dans-dimanche-soir-football/1303503",
    //     "urlToImage": "https://medias.lequipe.fr/img-photo-jpg/laurie-delhostal-va-remplacer-marina-lorenzo-jusqu-a-la-fin-de-la-saison-p-lahalle-l-equipe/1500000001578395/0:0,1998:1332-640-427-75/0bf3f.jpg",
    //     "publishedAt": "2021-12-06T17:30:00+00:00",
    //     "content": "Amazon Prime Video va confier l'animation de son émission Dimanche Soir Football à Laurie Delhostal à partir de janvier 2022. La journaliste, licenciée par Canal+ au printemps dernier et désormais su… [+117 chars]"
    // },
    // {
    //     "source": {
    //         "id": "espn",
    //         "name": "ESPN"
    //     },
    //     "author": "Adam Rittenberg",
    //     "title": "Sources - Mario Cristobal leaving Oregon Ducks football program for Miami Hurricanes coaching job",
    //     "description": "Former Miami player and assistant coach and current Oregon head coach Mario Cristobal will leave the Ducks program to become the Hurricanes' new head coach, sources told ESPN.",
    //     "url": "http://espn.go.com/college-football/story/_/id/32804655/sources-mario-cristobal-leaving-oregon-ducks-football-program-miami-hurricanes-coaching-job",
    //     "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F1115%2Fr937805_1296x729_16%2D9.jpg",
    //     "publishedAt": "2021-12-06T16:49:00Z",
    //     "content": "Mario Cristobal is heading home to the U.\r\nCristobal will leave Oregon to become Miami's head football coach, sources told ESPN.\r\nHe informed Ducks players of his decision at a team meeting Monday in… [+1334 chars]"
    // },
    // {
    //     "source": {
    //         "id": "espn",
    //         "name": "ESPN"
    //     },
    //     "author": "David M. HaleESPN Staff Writer ",
    //     "title": "Miami Hurricanes fire football coach Manny Diaz",
    //     "description": "Miami has fired coach Manny Diaz. Diaz had two winning seasons in his three years in charge of the Hurricanes.",
    //     "url": "http://espn.go.com/college-football/story/_/id/32804516/miami-hurricanes-fire-football-coach-manny-diaz",
    //     "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F1011%2Fr921459_1296x729_16%2D9.jpg",
    //     "publishedAt": "2021-12-06T16:15:35Z",
    //     "content": "After weeks of speculation, Miami has fired head coach Manny Diaz on Monday after three years on the job.\r\nThe decision comes after numerous reports indicated the school was making a significant offe… [+1518 chars]"
    // },
    // {
    //     "source": {
    //         "id": "nfl-news",
    //         "name": "NFL News"
    //     },
    //     "author": null,
    //     "title": "Washington Football Team emerging in chaotic NFC playoff race",
    //     "description": "Is the Washington Football Team, once a playoff afterthought, bound for the postseason? Jim Trotter examines the topsy-turvy battle, particularly when it comes to wild-card spots, in the NFC.",
    //     "url": "https://www.nfl.com/news/washington-football-team-emerging-in-chaotic-nfc-playoff-race",
    //     "urlToImage": "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/hzfuu2qjmusxin0qjmk3",
    //     "publishedAt": "2021-12-06T14:22:33.9049057Z",
    //     "content": "Washington (6-6) will play its final five games against division opponents, beginning next Sunday with the first of two remaining games versus front-running Dallas (8-4). If it wins out, something no… [+2151 chars]"
    // },
    // {
    //     "source": {
    //         "id": "nfl-news",
    //         "name": "NFL News"
    //     },
    //     "author": null,
    //     "title": "'Monday Night Football' preview: What to watch for in Patriots-Bills",
    //     "description": "NFL.com's Jelani Scott breaks down four things to watch for when the Buffalo Bills host the New England Patriots on Monday night.",
    //     "url": "https://www.nfl.com/news/monday-night-football-preview-what-to-watch-for-in-patriots-bills",
    //     "urlToImage": "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/ghjguvy6bfjlmpzjhoow",
    //     "publishedAt": "2021-12-06T13:07:41.5127504Z",
    //     "content": "Forget about the chatter regarding matchups in this rivalry's past. The only thing that will matter on Monday Night Football is the chance to seize the No. 1 spot in the AFC East. Riding the momentum… [+4108 chars]"
    // },
    // {
    //     "source": {
    //         "id": "bbc-sport",
    //         "name": "BBC Sport"
    //     },
    //     "author": "BBC Sport",
    //     "title": "German FA investigating Bellingham",
    //     "description": "The German Football Association (DFB) are investigating England midfielder Jude Bellingham's comments about referee Felix Zwayer after Borussia Dortmund's defeat by Bayern Munich.",
    //     "url": "http://www.bbc.co.uk/sport/football/59548308",
    //     "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/5EAE/production/_121983242_gettyimages-1237011231.jpg",
    //     "publishedAt": "2021-12-06T12:52:23.5732869Z",
    //     "content": "Jude Bellingham moved to Dortmund from Birmingham City in 2020\r\nThe German Football Association (DFB) are investigating England midfielder Jude Bellingham's comments about referee Felix Zwayer after … [+1489 chars]"
    // },
    // {
    //     "source": {
    //         "id": "bleacher-report",
    //         "name": "Bleacher Report"
    //     },
    //     "author": "David Kenyon",
    //     "title": "B/R's College Football Weekly Awards: Week 14",
    //     "description": "Ever since Nebraska and Illinois kicked off on Aug. 28, the 2021 college football season has built toward this weekend.   Twenty teams competing for 10 championships. Four spots in the College Football Playoff at stake...",
    //     "url": "https://bleacherreport.com/articles/2951058-brs-college-football-weekly-awards-week-14",
    //     "urlToImage": "https://img.bleacherreport.net/img/slides/photos/004/490/312/hi-res-97482f39941119e66cd3f8c3f199ce56_crop_exact.jpg?w=1200&h=1200&q=75",
    //     "publishedAt": "2021-12-06T12:00:07Z",
    //     "content": "Eric Gay/Associated Press\r\nExclamation of the Week: UTSA Roadrunners\r\nSpectacular year for UTSA. Heading into 2021, the program had never cracked eight wins. This season, the Roadrunners ripped off a… [+1159 chars]"
    // },
    // {
    //     "source": {
    //         "id": "espn",
    //         "name": "ESPN"
    //     },
    //     "author": "Todd McShayESPN Senior Writer ",
    //     "title": "NFL draft 2022 rankings - Todd McShay's top 32 players in the class, including Aidan Hutchinson vs. Kayvon Thibodeaux at No. 1",
    //     "description": "Todd McShay ranks his top draft prospects, including a new name at No. 1, three quarterbacks and a whole lot of players set to play in the College Football Playoff.",
    //     "url": "http://espn.go.com/nfl/draft2022/insider/story/_/id/32796282/nfl-draft-2022-rankings-todd-mcshay-top-32-players-class-including-aidan-hutchinson-vs-kayvon-thibodeaux-no-1",
    //     "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F1206%2Fr947188_1296x729_16%2D9.jpg",
    //     "publishedAt": "2021-12-06T12:00:00Z",
    //     "content": "We're through the conference championships, and the College Football Playoff is set. Bowl season is around the corner, and some prospects are even starting to declare intentions for next season. Inde… [+21586 chars]"
    // },
    // {
    //     "source": {
    //         "id": "talksport",
    //         "name": "TalkSport"
    //     },
    //     "author": "talkSPORT",
    //     "title": "Rangnick era at Manchester United starts with win, Brands leaves Everton as director of football, Salah...",
    //     "description": "",
    //     "url": "https://talksport.com/football/996467/man-utd-ralf-rangnick-liverpool-arsenal-tottenham-chelsea-mohamed-salah-everton/",
    //     "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2021/12/talksport-blog-4.jpg?strip=all&quality=100&w=1200&h=800&crop=1",
    //     "publishedAt": "2021-12-06T08:48:00Z",
    //     "content": "talkSPORT.com brings you all the latest football news, views and gossip.\r\nRalf Rangnick got has Manchester United tenure off to a winning start as his side beat Crystal Palace 1-0 on Sunday.\r\nThe Ger… [+663 chars]"
    // },
    // {
    //     "source": {
    //         "id": "abc-news-au",
    //         "name": "ABC News (AU)"
    //     },
    //     "author": "Elizabeth Byrne",
    //     "title": "Former Ainslie Football Club coach Stephen Porter sends himself to jail to start sentence for child sex abuse",
    //     "description": "Stephen Porter asked the ACT Supreme Court to send him to jail immediately, even though he hasn't yet been sentenced for his child abuse crimes.",
    //     "url": "http://www.abc.net.au/news/2021-12-06/child-sex-offender-stephen-porter-sends-himself-to-jail/100677980",
    //     "urlToImage": "https://live-production.wcms.abc-cdn.net.au/0fa43a6fdf8395133c4e07057bf9b04c?impolicy=wcms_crop_resize&cropH=1058&cropW=1881&xPos=39&yPos=22&width=862&height=485",
    //     "publishedAt": "2021-12-06T07:07:19Z",
    //     "content": "A former Ainslie Football Club coach who committed sexual offences against three boys has sent himself to jail.\r\n<ul><li>Stephen Porter, 51, has pleaded guilty to three child sex offences</li><li>He … [+1621 chars]"
    // },
    // {
    //     "source": {
    //         "id": "bleacher-report",
    //         "name": "Bleacher Report"
    //     },
    //     "author": "Brad Gagnon",
    //     "title": "Biggest Takeaways for NFL Playoff Picture in Week 13 as NFC, AFC Races Tighten",
    //     "description": "December football just feels...important. You know when you're watching the action on a Sunday afternoon/evening with company from the Christmas tree or menorah (or anything else that ...",
    //     "url": "https://bleacherreport.com/articles/2951096-biggest-takeaways-for-nfl-playoff-picture-in-week-13-as-nfc-afc-races-tighten",
    //     "urlToImage": "https://img.bleacherreport.net/img/images/photos/003/919/079/hi-res-dc695fb393ab28f1f8277b0e9a3875d7_crop_exact.jpg?w=1200&h=1200&q=75",
    //     "publishedAt": "2021-12-06T04:18:21Z",
    //     "content": "Justin K. Aller/Getty Images\r\nWhen the Ravens held a 10-3 fourth-quarter lead over the Steelers Sunday, it looked like we'd finally have some significant separation in the AFC North. The Bengals had … [+1392 chars]"
    // },
    // {
    //     "source": {
    //         "id": "espn",
    //         "name": "ESPN"
    //     },
    //     "author": null,
    //     "title": "Oklahoma finalizes deal with Brent Venables to be Sooners' head football coach, sources say",
    //     "description": "Oklahoma has finalized a deal with Clemson defensive coordinator Brent Venables to be the Sooners' next head football coach, sources said.",
    //     "url": "http://espn.go.com/college-football/story/_/id/32800108/oklahoma-finalizes-deal-brent-venables-sooners-head-football-coach-sources-say",
    //     "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2020%2F0517%2Fr699708_1296x729_16%2D9.jpg",
    //     "publishedAt": "2021-12-06T01:43:18Z",
    //     "content": "Oklahoma has finalized a deal with Clemson defensive coordinator Brent Venables to be the Sooners' next head football coach, sources told ESPN's Chris Low on Sunday.\r\nVenables has been a major part o… [+500 chars]"
    // },
    // {
    //     "source": {
    //         "id": "fox-sports",
    //         "name": "Fox Sports"
    //     },
    //     "author": "FOX Sports",
    //     "title": "College Football Playoff set: Alabama back at No. 1, while Michigan, Georgia, Cincinnati reach semis",
    //     "description": "Alabama is back on top after the conference championships, but the CFP rankings provide multiple storylines, RJ Young writes.",
    //     "url": "http://www.foxsports.com/stories/college-football/college-football-playoff-set-alabama-back-at-no-1-while-michigan-georgia-cincinnati-reach-semis",
    //     "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2021/12/1408/814/12.5.21_RJ-Youngs-CFP-reax_16x9.jpg?ve=1&tl=1",
    //     "publishedAt": "2021-12-05T20:20:29Z",
    //     "content": "By RJ Young\r\nFOX Sports College Football Writer\r\nAfter Alabama throttled Georgia, Michigan rubbed out Iowa and Cincinnati leaned on Houston to win their respective conference championships, it was al… [+4219 chars]"
    // },
    // {
    //     "source": {
    //         "id": "bleacher-report",
    //         "name": "Bleacher Report"
    //     },
    //     "author": "Morgan Moriarty",
    //     "title": "Did the College Football Playoff Committee Get It Right?",
    //     "description": "The 2021 College Football Playoff field was revealed Sunday afternoon. On New Year's Eve, No. 1 Alabama and No. 4 Cincinnati will play in the Cotton Bowl semifinal, and No. 2 Michigan and No...",
    //     "url": "https://bleacherreport.com/articles/2951083-did-the-college-football-playoff-committee-get-it-right",
    //     "urlToImage": "https://img.bleacherreport.net/img/images/photos/003/919/069/hi-res-3af8c43353cc6399d4eb04610dc1d748_crop_exact.jpg?w=1200&h=1200&q=75",
    //     "publishedAt": "2021-12-05T20:02:45Z",
    //     "content": "Jeff Dean/Associated Press\r\nThe 2021 College Football Playoff field was revealed Sunday afternoon. On New Year's Eve, No. 1 Alabama and No. 4 Cincinnati will play in the Cotton Bowl semifinal, and No… [+9209 chars]"
    // },
    // {
    //     "source": {
    //         "id": "espn-cric-info",
    //         "name": "ESPN Cric Info"
    //     },
    //     "author": null,
    //     "title": "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
    //     "description": "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
    //     "url": "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
    //     "urlToImage": "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
    //     "publishedAt": "2020-04-27T07:20:43Z",
    //     "content": "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]"
    // }
    // ]

    static defaultProps = {
        country: 'in',
        pageSize: 9,
        category: 'general'

    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }


    constructor() {
        super();
        console.log("Constructor called");
        this.state = {
            articles:[],
            loading: false,
            page:1
        }
    }


    async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ff6b3b8558be4a2ca3c12f9719ea6127&pge=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false })
    }

    handlePrevClick=async ()=>{
        console.log("previous");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ff6b3b8558be4a2ca3c12f9719ea6127&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true})
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })       
    }

    handleNextClick=async ()=>{
        console.log("next");

        if(!(this.state.page+1 >  Math.ceil(this.state.totalResults/6))){
            this.setState({loading: true})
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ff6b3b8558be4a2ca3c12f9719ea6127&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
            let data = await fetch(url)
            let parsedData = await data.json()
            console.log(parsedData);
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })            
        }

        
    }

    render() {
        return (
            <div className="container my-5">
                <h1 className='text-center' style={{margin:'35px'}}> Top News of the Day - {this.props.category}</h1>  
                {this.state.loading && <Spinner/> }
                <div className="row my-3 mx-10">
                {this.state.articles.map((element)=>{
                    return <div  className="col-md-4 ">
                    <NewsItem key={element.url} title={element.title} description={element.description} img={element.urlToImage} newsUrl={element.url} />
                    </div>
                })}
                <div className="container d-flex justify-content-between my-5" >
                <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handlePrevClick}>&larr;Previous</button>
                <button disabled={this.state.page+1 >  Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next&rarr;</button>
                </div>
                   
                </div>
            </div>
        )
    }
}

export default News
