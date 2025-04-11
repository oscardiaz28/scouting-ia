import { UserCheck, UserPlus, Video, Zap } from "lucide-react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

const data = [
  { habilidad: "Pases", cantidad: 120 },
  { habilidad: "Tiros", cantidad: 85 },
  { habilidad: "Regates", cantidad: 95 },
  { habilidad: "Velocidad", cantidad: 60 },
  { habilidad: "Defensa", cantidad: 70 },
];

export const DashboardPage = () => {


  return (
    <div className="">

      <div className="grid grid-cols-1 md:grid-cols-2">

        <div className="grid grid-cols-2 grid-rows-2">

          <div className="bg-[#1A1C1E] border-1 border-gray-800 p-4 px-5 flex items-start justify-between">
            <div className="flex flex-col items-start gap-4">
              <p className="text-sm text-gray-300">Ultimos Videos Subidos</p>
              <p className="text-3xl font-bold">40</p>
              <p className="border-1 border-gray-800 bg-gray-700 rounded-full p-1 px-2 text-xs font-semibold">+22%</p>
            </div>
            <div>
              <Video className="text-[#00AABC] w-8 h-8" />
            </div>
          </div>

          <div className="bg-[#1A1C1E] border-1 border-gray-800 p-4 px-5 flex items-start justify-between">
            <div className="flex flex-col items-start gap-4">
              <p className="text-sm text-gray-300">Jugadores Registrados</p>
              <p className="text-3xl font-bold">18</p>
              <p className="border-1 border-gray-800 bg-gray-700 rounded-full p-1 px-2 text-xs font-semibold">+32%</p>
            </div>
            <div>
              <UserPlus className="text-[#00AABC] w-8 h-8" />
            </div>
          </div>


          <div className="bg-[#1A1C1E] border-1 border-gray-800 p-4 px-5 flex items-start justify-between">
            <div className="flex flex-col items-start gap-4">
              <p className="text-sm text-gray-300">Jugadores Activos</p>
              <p className="text-3xl font-bold">25</p>
              <p className="border-1 border-gray-800 bg-gray-700 rounded-full p-1 px-2 text-xs font-semibold">+22%</p>
            </div>
            <div>
              <UserCheck className="text-[#00AABC] w-8 h-8" />
            </div>
          </div>


          <div className="bg-[#1A1C1E] border-1 border-gray-800 p-4 px-5 flex items-start justify-between">
            <div className="flex flex-col items-start gap-4">
              <p className="text-sm text-gray-300">Ultimos Videos Subidos</p>
              <p className="text-3xl font-bold">40</p>
              <p className="border-1 border-gray-800 bg-gray-700 rounded-full p-1 px-2 text-xs font-semibold">+22%</p>
            </div>
            <div>
              <Video className="text-[#00AABC] w-8 h-8" />
            </div>
          </div>

        </div>

        <div className="p-4 pt-0 w-full h-[400px] flex flex-col gap-5">
          <h2 className="pl-4 text-center">Habilidades Detectadas por la IA</h2>
          <ResponsiveContainer width="100%" height="95%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="habilidad" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="cantidad" fill="#38bdf8"  />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>
      
      <div className="mt-4">
          
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut soluta ad numquam ducimus totam, placeat molestiae molestias. Ad officiis dolor, unde aliquam natus cum rerum, inventore cupiditate quod, saepe repellat expedita. Nesciunt illo, incidunt ea ducimus aliquid odit architecto amet! Est eius cum culpa quisquam laboriosam consectetur dignissimos dicta, repudiandae voluptate fugit at! Dolor placeat quibusdam ipsum necessitatibus nesciunt, deserunt obcaecati laboriosam, nisi doloremque fugiat minus magni. Earum quam animi eum beatae libero. Repellendus mollitia quod, excepturi assumenda eligendi cupiditate soluta ipsam corrupti labore ratione delectus aspernatur minima obcaecati, rem cumque? Pariatur dignissimos cum consectetur repudiandae asperiores. Illum molestiae atque error animi libero numquam laboriosam voluptatibus architecto optio quasi quos eligendi perferendis commodi ipsam delectus, similique debitis itaque rem facere quia, reprehenderit perspiciatis? Temporibus omnis obcaecati suscipit soluta velit impedit aut tenetur ut, possimus saepe cumque sed odit? Officia eum vel commodi tenetur enim, amet minima ex adipisci ab distinctio cupiditate cum iure alias et mollitia a consectetur perspiciatis, fuga repellat error fugiat consequatur? Quasi, placeat consequuntur blanditiis illum magni laboriosam et laborum fugit fugiat quos ducimus veniam eligendi dolorum eveniet non, excepturi inventore, tempora doloribus optio harum incidunt delectus libero. Nostrum voluptate velit quos, inventore porro culpa. Mollitia voluptatem laboriosam adipisci, aut reprehenderit saepe autem tenetur delectus odit veniam reiciendis explicabo, modi enim atque cum eos esse fuga. Tempora sint laborum dolor, eius officiis corrupti, deserunt aliquam voluptas atque maiores alias quam, perspiciatis rerum nobis illo repellendus? Quidem eius numquam harum minima deserunt corrupti culpa quas architecto cupiditate sit vel error repellendus, aut quasi. Doloremque, esse? Odio magnam culpa dolor ipsam adipisci corporis natus labore amet dolorum possimus voluptate, exercitationem mollitia ad soluta nam beatae nulla unde quasi fuga quos, fugit quaerat? Soluta aliquid consequatur temporibus dignissimos iure, voluptatibus, hic deleniti quod dolor, labore expedita porro blanditiis doloremque facilis possimus odio quibusdam molestias deserunt ab nihil sit incidunt suscipit nemo vitae? Illum sint voluptatum in ex veniam praesentium accusamus fuga excepturi cumque? Fugit repellat consequatur tenetur consectetur exercitationem! Voluptatem nihil nesciunt ipsam optio, alias officia nisi tempora unde repudiandae rem tempore laborum fuga aliquam ea dolores dicta ducimus soluta debitis vero cupiditate mollitia et quas tenetur. Totam voluptates deserunt commodi blanditiis eius nostrum fugiat aut aliquid? Aspernatur sit corporis, quisquam numquam eos necessitatibus at distinctio molestiae iure quaerat animi labore soluta temporibus id sunt dolor, nulla possimus repudiandae! Numquam natus maiores repellat doloribus voluptas quasi consequuntur, eveniet expedita sunt quod molestiae, pariatur adipisci obcaecati suscipit harum iusto repudiandae ullam amet atque eaque! Optio reprehenderit ad sunt laudantium reiciendis. Quasi esse a, architecto quas dolorum officia fugit at minus dolores, libero temporibus amet iure deleniti officiis non odit delectus expedita quos nesciunt. Tenetur, qui, ab impedit sint dolorum labore dicta voluptates ea sit possimus eius nemo eligendi quo. Vitae quisquam ut, modi quidem perspiciatis earum? Soluta quia necessitatibus eaque, aliquid a nobis officiis itaque aliquam, omnis, asperiores sunt? Voluptas harum, nostrum, ut obcaecati perspiciatis voluptate excepturi itaque dicta, laborum voluptates quisquam mollitia natus? Quo dignissimos quaerat maiores atque cupiditate perspiciatis dolor doloremque hic veniam numquam sit in ratione enim eos doloribus, rem a esse obcaecati nemo aliquam at ipsum. Ab officiis eveniet quasi voluptate, fugiat ex? Incidunt non aspernatur aliquid quibusdam delectus amet nisi voluptatem numquam. Quisquam voluptatum sint unde totam. At quasi magnam eaque quo eveniet quam. Minus blanditiis maiores eos doloribus eum quasi voluptas, illo nam quia modi ab, sit eius. Blanditiis accusamus nemo rerum et saepe velit, quia dolorum adipisci soluta impedit rem beatae fuga? Corrupti, accusamus. Ab qui natus quae adipisci quisquam animi ex minima! Harum minus distinctio ratione cum perferendis ea praesentium. Expedita cum minus temporibus eligendi adipisci et tempora deleniti? Quia quam cum facere deserunt possimus eligendi, aliquid eos pariatur vero veritatis illum magni, voluptate commodi quisquam dolor temporibus exercitationem laborum omnis ullam harum est mollitia suscipit sequi? Velit illum delectus perspiciatis laboriosam a! Reiciendis, quis maiores odio quasi labore corrupti sed non laborum laboriosam animi dolores rem dignissimos nesciunt ipsum, eligendi culpa rerum illo? Nam eius unde iste, saepe natus non dolorum! Aspernatur optio praesentium necessitatibus fugit vel quas autem, officiis magni molestias repudiandae aliquam qui ullam ea alias. Ratione harum in repellendus fugit maiores deleniti fugiat provident magnam sint sunt unde aspernatur delectus deserunt officia et sequi iusto voluptate, veritatis quidem. Culpa, quam dicta. Laborum quae minus accusantium, animi laudantium dolorum, debitis ipsum nam aliquam perferendis itaque laboriosam repellendus velit cumque ratione voluptate commodi. Sunt, esse commodi et id debitis odit facere voluptas labore, nostrum vitae, aspernatur magnam! Nisi, nam, aut vero ex atque accusantium tempora nihil odio iste unde temporibus quia magni numquam labore amet ipsam incidunt nostrum eum, obcaecati dicta corrupti doloribus reiciendis accusamus. Porro laudantium eveniet corporis totam eos, ex fugit nemo unde non sequi voluptatem, amet doloribus neque maxime optio itaque id voluptatum laborum, molestiae reprehenderit obcaecati corrupti distinctio quam! Minus et enim accusantium dicta non magni, saepe esse officia explicabo sequi adipisci veniam ipsum beatae debitis soluta veritatis laudantium amet a fuga deleniti? Rem distinctio deserunt cumque quisquam impedit tenetur officiis itaque. Est recusandae quos magni ut incidunt molestias repudiandae esse doloremque cumque rerum, iure, voluptate laborum sint! Voluptatem, suscipit ea vero recusandae nobis minus voluptates aliquam unde harum sed eveniet, explicabo natus deserunt labore libero dolor! Quas in labore illo earum. Explicabo fuga quia consequatur magni! Optio ipsum, repellendus repellat ea nobis autem sequi iure vero, nisi libero consectetur aliquid odio fugiat quos deleniti labore officia id ad? Similique cum facilis ratione eligendi at ipsum deleniti ipsam maiores id quod sequi, illo, ut odit sit dolor, rerum quisquam. Sapiente deleniti provident ducimus minima, ab doloremque qui quod, fuga dicta possimus accusamus ipsam aperiam commodi explicabo maxime? Itaque alias, est sequi animi ullam deleniti autem dolorem deserunt. Aliquid mollitia explicabo excepturi porro necessitatibus perferendis, suscipit nisi amet accusantium nihil corporis beatae neque quia! Praesentium, harum eos? Iste dolores tempore sunt molestiae modi rem. Reprehenderit ratione dolor illum sapiente perspiciatis sit ipsa! Corporis provident, dolorum consequatur placeat ut sint nulla quia id vitae quis suscipit sed similique. Eveniet.

      </div>

    </div>
  )
}
