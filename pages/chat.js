import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'

export default function Chat(props) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="flex-col mx-auto">
        <div className="text-center font-semibold text-4xl mx-auto">

        <main class="chat-main">
        <div class="chat-sidebar">
          <h3><i class="fas fa-comments"></i> Room Name:</h3>
          <h2 id="room-name"></h2>
          <h3><i class="fas fa-users"></i> Users</h3>
          <ul id="users"></ul>
        </div>
        <div class="chat-messages"></div>
      </main>
      <div class="chat-form-container">
        <form id="chat-form">
          <input
            id="msg"
            type="text"
            placeholder="Enter Message"
            required
            autocomplete="off"
          />
          <button class="btn"><i class="fas fa-paper-plane"></i> Send</button>
        </form>
      </div>
    </div>

    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/qs/6.9.2/qs.min.js"
      integrity="sha256-TDxXjkAUay70ae/QJBEpGKkpVslXaHHayklIVglFRT4="
      crossorigin="anonymous"
    ></script>
    <script src="/socket.io/socket.io.js"></script>
    <script src="js/main.js"></script>

      </section>
    </Layout>
  )
}