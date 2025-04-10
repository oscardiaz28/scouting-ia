import { ChartNoAxesColumn, Clock, Heart, Search, Video, Zap } from 'lucide-react'

const cards = [
    {
        icon: <Search className='w-7 h-7 text-[#2585FE]' />,
        title: "Content Recognition",
        subtitle: "Identify objects, scenes, people, and text within your videos with precise timestamps."
    },
    {
        icon: <ChartNoAxesColumn className='w-7 h-7 text-[#2585FE]' />,
        title: "Engagement Analytics",
        subtitle: "Track viewer retention, engagement markers, and predict content performance."
    },
    {
        icon: <Heart className='w-7 h-7 text-[#2585FE]' />,
        title: "Sentiment Analysis",
        subtitle: "Measure emotional impact and audience sentiment throughout your video content."
    },
    {
        icon: <Clock className='w-7 h-7 text-[#2585FE]' />,
        title: "Key Moment Detection",
        subtitle: "Automatically identify the most impactful moments in your videos for highlights and clips."
    },
    {
        icon: <Zap className='w-7 h-7 text-[#2585FE]' />,
        title: "Optimization Suggestions",
        subtitle: "Get AI-powered recommendations to improve your video's performance and reach."
    },
    {
        icon: <Video className='w-7 h-7 text-[#2585FE]' />,
        title: "Trend Analysis",
        subtitle: "Stay ahead with insights on trending topics related to your video content."
    }
]

export const Features = () => {
    return (

        <section className="py-20 relative overflow-hidden">

            <div className='blurry-dot'></div> 

            <div className="max-w-[1300px] mx-auto px-4 flex flex-col gap-20">

                <div className="text-center">
                    <h1 className="text-4xl md:text-[45px] font-bold text-gray-200">Powerful AI Video Analysis</h1>
                    <p className="text-lg md:text-xl font-semibold text-gray-400 mt-6 max-w-3xl mx-auto">Our advanced AI scans every frame to extract actionable insights and detailed analytics about your content.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {cards.map( (card, idx) => (
                            <div key={idx} className="bg-[#262627]/60 rounded-xl border-1 border-[#323233] p-6 py-7 pr-7 flex flex-col gap-4 feature-card
                            backdrop-blur-md hover:bg-[#2e2d2d]/70
                            ">
                                {card.icon}
                                <div>
                                    <h3 className="text-xl font-bold">{card.title}</h3>
                                    <p className="mt-3 font-normal text-gray-400 ">{card.subtitle}</p>
                                </div>
                        </div>
                    ) )}

                </div>
            </div>
        </section>
    )
}
