import Link from "next/link";
import { CiEdit } from "react-icons/ci";
import DeleteBlock from "../../home/DeleteBlock";
const PostTable = ({ ticket }) => {
  return (
    <>
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={ticket.imgurl} alt={ticket.title} className="bg-gray-600"/>
              </div>
            </div>
            <div>
              <div className="font-normal md:font-bold">{ticket.title}</div>
            </div>
          </div>
        </td>
        <td className="hidden lg:block">{ticket.description}</td>
        <td>
          <Link href={`/admin/post/${ticket._id}`}>
            <CiEdit size={25} />
          </Link>
        </td>
        <th>
            <DeleteBlock path="Tickets" id={ticket._id} />
        </th>
      </tr>
    </>
  );
};

export default PostTable;
