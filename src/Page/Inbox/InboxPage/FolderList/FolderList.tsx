import React from 'react';

interface FolderListProps {
  folders: string[];
  selectedFolder: string;
  onSelectFolder: (folder: string) => void;
}

const FolderList: React.FC<FolderListProps> = ({ folders, selectedFolder, onSelectFolder }) => {
  return (
    <div className="w-1/4 bg-gray-100 p-4">
      <ul>
        {folders.map((folder) => (
          <li
            key={folder}
            className={`cursor-pointer py-2 px-4 rounded ${selectedFolder === folder ? 'bg-blue-200 font-bold' : ''}`}
            onClick={() => onSelectFolder(folder)}
          >
            {folder}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FolderList;
