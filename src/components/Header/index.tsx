import { CgMenu } from "react-icons/cg"
import { FaRegComment, FaRegBell } from "react-icons/fa";

import { HeaderContainer, HeaderContent, Stats } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <button>
          <CgMenu />
        </button>

        <div>
            <Stats>
              <div>
                <FaRegComment />
                <div className='notification-circle'>3</div>
              </div>

              <div className="bell-icon">
                <FaRegBell />
                <div className='notification-circle'>1</div>
              </div>
            </Stats>

            <button>
              <img src="https://avatars.githubusercontent.com/u/77869200?v=4" alt='Profile' />
            </button>
        </div>
      </HeaderContent>
    </HeaderContainer>
  )
}