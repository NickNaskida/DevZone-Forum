import React from 'react';

import './Homepage.scss';

import Announcement from '../../components/HomepageComps/Announcement/Announcement'
import WelcomeCard from '../../components/HomepageComps/WelcomeCard/WelcomeCard'
import AccountCard from '../../components/HomepageComps/AccountCard/AccountCard'


const Homepage = () => {
  return (
    <div className="homepage__wrapper">
      <section>
        <Announcement />
        <WelcomeCard />
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat deserunt ipsa voluptates reiciendis cum velit fuga quisquam modi illum odio adipisci accusamus ratione alias ullam nam iusto repudiandae, quidem quia.
          Debitis maiores vel dignissimos impedit fugiat ipsam soluta nihil aspernatur ratione, nobis eaque harum atque voluptatibus similique. Quasi odio aliquid eveniet nobis enim doloremque, maxime, libero ratione et vel ad.
          Ducimus architecto cupiditate recusandae maxime mollitia? Eum, perspiciatis consequatur nulla quia culpa corrupti recusandae enim excepturi nemo! Adipisci, qui tempore quam enim praesentium incidunt voluptatum consectetur quis omnis? Error, amet.
          Doloremque maiores, ex pariatur nulla neque consequatur optio, deleniti natus recusandae nihil qui voluptates totam modi suscipit dolores ad? Eos a maiores totam consectetur ex illum commodi nisi, ipsa ipsum?
          Dolorem et asperiores quos corporis cupiditate dignissimos earum amet eligendi laboriosam atque enim ipsum, hic ab repudiandae est exercitationem officia assumenda voluptas corrupti doloribus ea? Velit ab natus atque impedit?
          Porro consectetur, eligendi impedit beatae tenetur cum. Eum, placeat corrupti? Doloribus, fugit. Iure nihil omnis perspiciatis dolorum, error laudantium exercitationem veniam ipsam fuga, laborum corrupti deserunt, quae dolorem dignissimos nemo.
          Sequi modi non beatae at doloribus vero amet qui tenetur perferendis? Nam quia esse, eaque atque obcaecati laudantium harum totam placeat architecto iusto delectus asperiores labore aliquam soluta beatae unde.
          Optio, recusandae voluptatum vitae molestiae unde rerum esse tempora sequi veniam quis doloribus explicabo. Ducimus, repellendus? Eius inventore vel, repellendus quam temporibus impedit, facere ullam esse cum, laborum rem laboriosam.
          Quia natus blanditiis, perferendis nisi commodi odio omnis quos distinctio vitae. Nesciunt odio laudantium unde nobis placeat adipisci, debitis soluta impedit quas voluptates repudiandae similique tempore. Iure earum magnam quis.
          Hic facere eveniet rem vitae nemo ullam fuga distinctio. Eos voluptas debitis minima eum? Molestiae, culpa aliquid. Cupiditate enim, ab dignissimos omnis facilis tempora amet nesciunt officiis, adipisci, iusto voluptate?
          Error excepturi mollitia voluptatibus natus laboriosam ipsa sequi laborum quo maxime iste repellat, est quis vitae eligendi vero dolorem qui placeat unde non nulla cumque, et optio? Odio, itaque officiis?
          Odio velit aliquid, laudantium suscipit magni veritatis quam eum non rem numquam dolorum nisi fugit animi quia provident nihil alias molestias odit autem culpa! Ipsam, natus possimus! Ex, voluptates cum.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quia facere doloribus amet, ipsum fugit nisi perferendis exercitationem soluta maiores? Eaque sunt, dignissimos velit odio perspiciatis odit consequatur dolorum. Repellendus.
          Hic maiores dolores eos ea fugiat ducimus! Magni explicabo rerum perspiciatis ducimus aliquam id, dolor porro necessitatibus dolore rem ab assumenda eius animi sed cum minus vero voluptatibus sint nisi.
          Nam, praesentium. Autem velit facere deleniti iure suscipit nemo laborum, cumque odio voluptatibus officiis aperiam temporibus commodi quis dicta dolor et quos consequuntur eligendi dolore ducimus, voluptatem optio cum repellendus?
          At, labore minus reprehenderit corrupti esse aliquid sed! Commodi, molestiae autem assumenda, non exercitationem necessitatibus impedit quia ad odio magni officiis dolor. Voluptatibus porro ut, ea fugiat molestiae nisi quas.
        </div>
        <div className="divisor_line"></div>
        <div className="homepage__footer">
          <div><i className="fal fa-copyright"></i> DevZone 2022</div>
          <div>Developer: <a href="https://github.com/NickNaskida">Nikoloz Naskidashvili</a></div>
        </div>
      </section>
      <aside>
        <AccountCard />
        <div className="divisor_line"></div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eius officiis, molestiae nobis facilis ab adipisci? Eos, necessitatibus cum. Aspernatur quasi quibusdam temporibus ducimus, harum officia doloremque perspiciatis ipsum laborum!
          Fuga voluptatem esse aspernatur. Placeat nisi magnam nam nobis omnis dolores aut amet quasi cumque reprehenderit ad architecto officiis, laboriosam accusantium a cum ea! Consequatur in rem veritatis dignissimos tempora.
          Reiciendis vel excepturi molestiae eius magni a facilis similique odio praesentium. Quod, voluptas? Perferendis quis perspiciatis omnis, quas dolore alias libero! Expedita quo perferendis quidem tempore illum, minima eaque. Est.
          Dolorem, vero cum nam ab enim unde corrupti expedita consequuntur aspernatur voluptatum at mollitia possimus iste iure totam quo, cupiditate sit optio modi sequi odit cumque quos ratione. Itaque, ex.
        </div>
        <div className="divisor_line"></div>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptates quis neque voluptate quo repellendus alias iure error illum natus? Numquam ipsum molestias nemo deleniti quia dolorum beatae accusantium facilis!
          Beatae totam culpa alias id libero quod maiores corporis, quas ipsa, tempore nobis similique enim assumenda doloribus dicta veniam quasi minus exercitationem impedit nemo deleniti dolor error aut? Perspiciatis, ea.
          Nesciunt fugiat iste tempora eius pariatur eaque, reprehenderit dolorum corporis cupiditate autem. Sint unde vitae voluptas architecto animi accusamus minima culpa tempora tenetur minus, modi quam maiores voluptate aliquid nostrum!
        </div>
        <div className="divisor_line"></div>
        <center>19-May-2022 20:40</center>
      </aside>
    </div>   
  )
}

export { Homepage }