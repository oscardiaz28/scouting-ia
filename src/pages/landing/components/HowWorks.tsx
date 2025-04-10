import { ChartNoAxesColumn, Cpu, Upload } from "lucide-react"

const steps = [
    {
        icon: <Upload className="text-emerald-400 w-9 h-9" />,
        title: "Upload Your Video",
        subtitle: "Simply drag and drop or select your video file. We support all major formats and resolutions."
    },
    {
        icon: <Cpu className="text-emerald-400 w-9 h-9" />,
        title: "AI Processing",
        subtitle: "Simply drag and drop or select your video file. We support all major formats and resolutions."
    },
    {
        icon: <ChartNoAxesColumn className="text-emerald-400 w-9 h-9" />,
        title: "Generate Insights",
        subtitle: "View comprehensive analytics and visualizations about your video's content and performance."
    }
]

export const HowWorks = () => {


  return (
    <section className='py-28 pb-32 relative overflow-hidden'>

        <div className="how-works-dot"></div>

        <div className='max-w-[1300px] mx-auto px-4 flex flex-col gap-20'>

            <div className='text-center'>
                <h1 className="text-4xl md:text-[45px] font-bold text-gray-200">How it Works</h1>
                <p className="text-lg md:text-xl font-semibold text-gray-400 mt-6 md:mt-4 max-w-3xl mx-auto">Get started in minutes with our simple four-step process.</p>
            </div>

            <div className="flex flex-col gap-10 md:flex-row">
                {
                    steps.map( (step, idx) => (
                        <div key={idx} className="flex flex-col gap-6 justify-center items-center">
                            <div className="w-24 h-24 rounded-full bg-[#242425]/50 flex items-center justify-center border-1 border-[#2D2B2F] backdrop-blur-2xl ">
                                {step.icon}
                            </div>
                            <div className="text-center">
                                <h2 className="text-xl font-bold ">{step.title}</h2>
                                <p className="mt-4 text-white/70">{step.subtitle}</p>
                            </div>
                        </div>
                    ) )
                }
            </div>

        </div>

    </section>
  )
}
