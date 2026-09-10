<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Berita;
use App\Models\Galeri;
use App\Models\Kontak;
use Illuminate\Support\Facades\Validator;

class ApiController extends Controller
{
    private function formatImageUrl($path)
    {
        if (!$path) {
            return null;
        }
        if (str_starts_with($path, 'http://') || str_starts_with($path, 'https://')) {
            return $path;
        }
        return asset('storage/' . $path);
    }

    public function getBerita(Request $request)
    {
        $query = Berita::query();

        if ($request->has('category') && $request->category !== 'semua') {
            $query->where('category', $request->category);
        }

        $news = $query->orderBy('created_at', 'desc')->get()->map(function ($item) {
            return [
                'id' => $item->id,
                'title' => $item->title,
                'slug' => $item->slug,
                'category' => $item->category,
                'imageSrc' => $this->formatImageUrl($item->image_path),
                'description' => $item->description,
                'content' => $item->content,
                'date' => $item->created_at->translatedFormat('d F Y'),
                'created_at' => $item->created_at,
            ];
        });

        return response()->json($news);
    }

    public function getBeritaBySlug($slug)
    {
        $item = Berita::where('slug', $slug)->first();

        if (!$item) {
            return response()->json(['message' => 'Berita tidak ditemukan'], 404);
        }

        return response()->json([
            'id' => $item->id,
            'title' => $item->title,
            'slug' => $item->slug,
            'category' => $item->category,
            'imageSrc' => $this->formatImageUrl($item->image_path),
            'description' => $item->description,
            'content' => $item->content,
            'date' => $item->created_at->translatedFormat('d F Y'),
            'created_at' => $item->created_at,
        ]);
    }

    public function getGaleri(Request $request)
    {
        $query = Galeri::query();

        if ($request->has('category') && $request->category !== 'semua') {
            $query->where('category', $request->category);
        }

        $items = $query->orderBy('created_at', 'desc')->get()->map(function ($item) {
            return [
                'id' => $item->id,
                'title' => $item->title,
                'category' => $item->category,
                'categorySlug' => str($item->category)->slug()->toString(),
                'src' => $this->formatImageUrl($item->image_path),
                'desc' => $item->description,
                'created_at' => $item->created_at,
            ];
        });

        return response()->json($items);
    }

    public function storeKontak(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nama' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subjek' => 'required|string|max:255',
            'pesan' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $kontak = Kontak::create($validator->validated());

        return response()->json([
            'success' => true,
            'message' => 'Pesan Anda telah berhasil dikirim!',
            'data' => $kontak
        ], 201);
    }
}
